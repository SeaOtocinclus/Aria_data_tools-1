/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "CompressedIStream.h"

#include <boost/iostreams/filter/gzip.hpp>
#include <cassert>

namespace utils {
CompressedIStream::CompressedIStream(const std::string& path, StreamCompressionMode compression)
    : std::istream(&inbuf_),
      backingIfstream_(path.c_str(), std::ios_base::in | std::ios_base::binary),
      inbuf_() {
  if (compression == StreamCompressionMode::GZIP) {
    inbuf_.push(boost::iostreams::gzip_decompressor());
  }

  assert(backingIfstream_.good());
  inbuf_.push(backingIfstream_);
}
} // namespace utils
