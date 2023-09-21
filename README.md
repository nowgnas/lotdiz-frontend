## folder structure

### common

- 공통 파일
- 여러곳에서 동시에 사용하는 것
- 공통으로 사용되는 폴더와 파일들
  - /components
  - commonFunc.ts
  - config.ts
  - Button.vue

### middlewares

- vue router와 밀접한 동작
- 네비게이션 가드를 저장
  - 인증, 인가에 사용 예상됨

```ts
// middlewares/checkAuth.js

export default function checkAuth(next, isAuthenticated) {
  if (isAuthenticated) {
    next('/')
  } else {
    next('/login')
  }
}
```

```ts
// vue-router

import Router from 'vue-router'
import checkAuth from '../middlewares/checkAuth.js'
const isAuthenticated = true

const router = new Router({
  routes: [],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  checkAuth(next, isAuthenticated)
})
```

### modules

- 어플리케이션의 코어
- 논리적으로 분리된 부분 저장
- vue 컴포넌트를 저장할 수 있는 내부 컴포넌트 폴더
- 테스트 폴더 (모든 테스트 모듈에 보관하는 것을 선호)
- store.ts, store 모듈을 보관하는 store 디렉토리
- 모듈과 관련된 다른 파일, 모듈에만 관련된 helper function
  > ex: 앱에 있는 order에 관련된 컴포넌트를 저장하는 ordes모듈에 관한예시(list of orders, order details, etc.).
  > Orders vuex store 모듈. 추가관련 파일.

### services

- 서비스를 저장하는데 필요
- api 연결 서비스, localstorage 매니저 서비스 등을 만들고 저장

### router

- 라우터 관련 모든 파일
- router 경로가 한 곳에 있는 index.ts가 존재할 수 있음
- index.ts를 사용하는 경우 src 루트에 저장하는 것을 권장
  [자동 라우터 생성하기](https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50)

### store

- 상태 관리를 위한 폴더
- state, actions, mutations, getters를 저장

### views

- 어플리케이션 경로에 대한 모든 진입점을 저장
- `/home`, `/about`, `/orders` 라우터가 있으면 views에 Home.vue, About.vue, Order.vue가 존재해야 함
- 파일 구조가 조금 더 깔끔해진다.
- 어플리케이션의 라우트를 빨리 이해할 수 있다.
- 페이지에서 어떤파일이 루트인지, 어디에서 작업을 시작하는지 쉽게 이해할 수 있다.
