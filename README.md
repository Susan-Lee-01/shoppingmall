# [Re: birth]
<img width=100% src="https://github.com/user-attachments/assets/d1fa8ed3-6ec5-4d98-9d54-1ab649537b4e">

**Re: birth**는 낡고 버려진 물건들을 되살리는 업사이클링 쇼핑몰입니다.  
업사이클링의 매력과 가치를 **Re: birth**에서 경험해보세요!  


## 팀원 구성 및 역할

| 이름   | 담당             |  역할             | 
| ----- | --------------- | ---------------- |
| 김동현 | 팀장, 백엔드  | 주문 API 개발 및 데이터베이스 관리
| 정수종 | 백엔드       | 상품 관련 API 개발 및 데이터베이스 구현
| 허은리 | 백엔드       | 회원 관리 API 개발 및 시스템 구축, 인증 처리
| 이선우 | 프론트엔드    | 로그인, 회원가입, 비회원 주문조회, 주문결제, 관리자(상품 등록, 수정, 삭제)
| 윤수화 | 프론트엔드    | 상품상세, 관리자(주문 조회 및 삭제, 배송 상태 관리)
| 박현규 | 프론트엔드    | 마이페이지, 상품 조회 및 정렬
| 하지원 | 프론트엔드    | 장바구니, 주문 조회


## 기술 스택

### Frontend
<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
### Backend
<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=node&logoColor=white"> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">


## 주요 기능
|                                                               |                                                          |
| ------------------------------------------------------------- | -------------------------------------------------------- |
| **로그인**                                                   | **회원가입**                                        |
| <img width="500" src="https://github.com/user-attachments/assets/b0131f78-70d7-460c-99b4-1662ae81787f"> | <img width="500" src="https://github.com/user-attachments/assets/d26373a6-7f0f-4e80-b3b3-630ad5412ba3"> |
| **상품조회**                                                  | **상품정렬**                                       | 
|  <img width="500" src="https://github.com/user-attachments/assets/0ee70abf-e25c-4f8d-9a60-c71acb33dd35"> | <img width="500" src="https://github.com/user-attachments/assets/2f7551af-249c-4fd3-9e19-caeb24ca18a0">|
| **상품상세**                                                  | **장바구니**                              |
| <img width="500" src="https://github.com/user-attachments/assets/b29d16e7-49b9-4228-ad11-4b3abc263823"> |  <img width="500" src="https://github.com/user-attachments/assets/a824ea95-5d50-46fd-b81c-81d475e5b02d"> |
| **주문결제**                                                   | **주문조회(회원, 비회원)**                  |
| <img width="500" src="https://github.com/user-attachments/assets/409752ce-876c-433a-b14b-d3b41860c499"> | <img width="500" src="https://github.com/user-attachments/assets/5af5158a-d411-4637-8970-5a9ef2ac1640"><img width="500" src="https://github.com/user-attachments/assets/89617381-afa5-4a88-afeb-d6de9840a6e0">
| **관리자페이지(상품)**                                          | **관리자페이지(주문)**                                                              |
| <img width="500" src="https://github.com/user-attachments/assets/ec0a8884-cbb7-440f-ab46-6169fbd1fa1a"> |<img width="500" src="https://github.com/user-attachments/assets/c1083645-69da-4ac7-b5eb-05772555370f"> |



## 기능

- 이메일 인증을 통한 회원가입과 이메일 로그인
- 회원 정보 조회, 수정, 탈퇴, 로그아웃
- 쿠키와 JWT 토큰을 이용한 유저 인증과 유저와 관리자를 구분하는 RBAC
- 관리자 계정만 접근 가능한 상품과 주문 관리를 위한 관리자 페이지
- 전체 상품 조회, 카테고리별 상품 조회, 상품 등록 및 수정, 삭제
- 전체 주문 조회, 배송 상태 관리 및 주문 삭제
- 장바구니 관리(등록, 수정, 삭제)
- 상품 상세 페이지에서 장바구니 추가 및 주문하기
- 최신순, 상품 등록순, 가격 높은순, 낮은순으로 상품 정렬 및 페이지네이션
- 비회원 주문, 주문 조회
- 주소 찾기 (결제 페이지)

## 트러블 슈팅

### **CORS** 에러

- **원인**: `app.js` 파일에 `app.use(cors())` 를 넣어놓은 상태였음에도 발생한 **CORS 에러**가 발생했다.  
  client 쪽에서 불러오는 리소스가 **'local' address space**가 아닌 더 **'private'** 한 곳에 있어야 한다는 내용이었다.  
  구글링을 해보니 **origin보다 더 낮은 수준의 네트워크로 요청**을 보내는 경우 이 에러가 발생한다고 했고 우리의 경우 **Private Address(vm의 ip주소)** 에서 **Local Address(localhost)** 요청을 보내고 있었다.  
   (`fetch` 함수가 `http://localhost:5001/api/v1/...`의 URL로 요청을 보내고 있었음)
- **해결**: 프론트 분들께도 이 사실을 알려드리고 `fetch` 인자를 모두 `/api/v1/...`의 URI 형식으로 바꾸어 해결하였다. 물론 URI로만 요청을 보내면 상관 없겠지만 서로 다른 도메인 뿐 아니라 도메인의 네트워크 수준까지도 고려해야 한다는 것!
- 참조: [관련 블로그](https://velog.io/@tjdals9638/The-request-client-is-not-a-secure-context-and-the-resource-is-in-more-private-address-space)  
  ![CORS](https://velog.velcdn.com/images/limelimejiwon/post/4d4888e7-63d3-4a5b-9ccb-46a560be9fad/image.png)  
  출처: https://velog.io/@limelimejiwon/CORS-%EC%97%90%EB%9F%AC-%EC%82%BD%EC%A7%88-%EC%8B%9C%EC%9E%91


### **에러요청 본문 데이터 파싱 문제**


**원인**
- 백엔드 API에서 DELETE 요청을 수신할 때, JSON 형식으로 itemIds로 ID 값을 예상하고 있지만, 프론트엔드에서는 요청을 item: newItem와 같은 형식으로 보내는 경우, 서버는 요청을 정확하게 파싱하지 못하고 이로 인해 오류가 발생할 수 있습니다. 요청의 본문 형식과 서버의 예상 형식이 다르기 때문에 문제가 발생합니다.

**해결** 
- 클라이언트와 서버 간의 요청 및 응답 데이터의 형식을 일치시켜야 합니다. 서버는 DELETE 요청의 본문에서 itemIds로 ID 값을 예상하므로 클라이언트에서 요청을 itemIds와 같은 형식으로 수정해야 합니다. 이 문제를 해결하면서 클라이언트와 서버 간의 요청 및 응답 데이터 형식의 중요성을 깨달았습니다. 데이터의 형식을 서버의 예상 형식과 일치시킴으로써, 요청이 올바르게 파싱되고 처리될 수 있음을 깨달았습니다. 데이터 형식의 불일치로 인한 문제를 수정함으로써, 향후 비슷한 문제를 방지할 수 있을 것
