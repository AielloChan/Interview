// Copyright 2021 aiello
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Vue from 'vue'

Vue.directive('lazy', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted(el, binding) {
        el.src = "https://fakeimg.pl/250x100/"
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(item => {
                if (item.intersectionRatio > 0 || item.isIntersecting) {
                    console.log("done");
                    item.target.src = binding.value
                    obs.unobserve(el)
                }
            })
        }, { rootMargin: "100px" })
        obs.observe(el)
    },
    unbind() { }
})