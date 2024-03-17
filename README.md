## 개요
### URL 
https://digitalssog-admin.vercel.app/
- 사용자 버전
    -  배포 URL
      https://digitalssog.com
    - Github URL
      https://github.com/Ellie998/digitalssog-next

### 프로젝트 목적

- 디지털 기기를 사용하는 방법에 대한 정보 생성 기능을 제공하여 컨텐츠 생성의 편의성을 제공한다.
- 기기의 미리보기 화면에 대한 정보 생성 기능을 제공하여 컨텐츠 생성의 편의성을 제공한다.

### 목표

- 디지털쏙 페이지에 필요한 정보를 빠르고 편리하게 생성할 수 있도록 한다.
### 미리보기
- 화면(screen) 생성 form 사용 미리보기
     ![makeTextElement](https://github.com/Ellie998/digitalssog-admin/assets/89681100/1338e410-659a-4165-8437-14b29a33df50)

- 여러 화면(screen) 정보를 포함하는 template table 사용 미리보기
  ![howtousetable](https://github.com/Ellie998/digitalssog-admin/assets/89681100/3b9b702b-982c-401a-acef-53c857dd8909)
    

### 사용 라이브러리

- 프레임워크
  - next 13.4.8 (app router)
  - react 18.2.0
  - react-dom 18.2.0
- 스타일
  - tailwind
  - mui
  - shadcn-ui
  - bootstrap-icons 1.10.5
  - react-icons 4.12.0
- form
  - react-hook-form 7.48.2
  - zod 3.22.4
  - uuid 9.0.1
  - react-toastify 9.1.3
- 데이터베이스
  - prisma/client 5.11.0
- 인증
  - supabase 2.39.3
- 상태관리
  - recoil 0.7.7

## 기능
![기능설명체험영상](https://github.com/Ellie998/digitalssog-admin/assets/89681100/3bfc40b1-c0ad-4f3d-b2a2-15a459583609)
1. 기기를 사용하는 방법에 대한 정보들을 만들기 위한 form을 제공한다.
2. 사용자가 기기의 화면과 동일한 미리보기 화면으로 기능을 직접 경험해보며 디지털 기기를 학습할 수 있는 화면(preview)을 만들기 위한 form을 제공한다. 

### 용어 정리

1. 기능 설명

  - <img width="200" alt="스크린샷 2024-03-15 오후 8 22 18" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/68ff99b1-5036-40f7-b041-0b0a8e931ba7">

  - 기능을 사용하기 위한 방법을 순서에 맞게 나열해놓은 것
  - 설명을 누르면 그 설명에 해당하는 기기화면을 보여준다.

2. 기기 화면 (preview)
  - <img width="200" alt="스크린샷 2024-03-15 오후 8 22 40" src="https://github.com/Ellie998/digitalSSOG-next/assets/89681100/72040163-f919-4164-be37-43b14d6afd88">

  - 기능 설명에 해당하는 기기 화면이다.
  - 실제 기기와 동일하게 동작한다.
  - 기기 화면에서 타겟을 누르면 다음 설명 화면으로 넘어간다.


### 사이트 구조

- figma url
  https://www.figma.com/file/jrvxebNsaFW70cd5t0F6PC/%EB%94%94%EC%A7%80%ED%84%B8%EC%8F%99-%EB%A6%AC%EB%89%B4%EC%96%BC?type=design&node-id=225%3A2047&mode=design&t=zAGr94lwtvqc9ngU-1

- /admin/descriptions계열
  ![admin:description](https://github.com/Ellie998/digitalssog-admin/assets/89681100/b8404cd3-9436-452b-8339-20bff951571a)
  - /admin/descriptions
  - /admin/descriptions/[functionName]
  - /admin/descriptions/[functionName]/[appName]/[methodOrder]

    
- /admin/guide/[guideId]
  ![admin:guides: guideId](https://github.com/Ellie998/digitalssog-admin/assets/89681100/c900b173-c5c9-4ed7-919a-dbf7b4737f68)
  
- /admin/template 계열
  ![template](https://github.com/Ellie998/digitalssog-admin/assets/89681100/1a8f0c21-f1e4-4039-b4a9-3e4d695327c6)  
  - /admin/templates
  - /admin/templates/[templateId]
  
- /admin/screen 계열
  ![screen](https://github.com/
  ![Element Form_ver1](https://github.com/Ellie998/digitalssog-admin/assets/89681100/52c49db8-5176-4cbb-bf94-3a66235c2647)
Ellie998/digitalssog-admin/assets/89681100/9c79db4b-d04d-4f70-bf13-854b6ebccb2e)
  
### 추가하고 있는 기능

관리자 페이지에서 컨텐츠 생성을 효율적이고 빠르게 하는 방법에 대해 고민, 개선 중

- 기기 화면과 관련된 데이터를 DB에 저장할 수 있도록 데이터 처리 방법과 데이터 생성 방법을 개선중이다.
  - 프로토타입
    - https://www.figma.com/file/jrvxebNsaFW70cd5t0F6PC/%EB%94%94%EC%A7%80%ED%84%B8%EC%8F%99-%EB%A6%AC%EB%89%B4%EC%96%BC?type=design&node-id=24%3A208&mode=design&t=Hy71PG75UCr9GWm9-1
    - 기존
      컴포넌트 하나하나 코드로 작성하여 구현
    - 진행 중 (ver1~ver3)
      기기 화면을 생성하는 form을 제공하여 편리하고 손쉽게 화면을 생성할 수 있도록 한다.

### 추가하고 싶은 기능

- /description/[functionName] 페이지에서 관리자는 해당 글 바로 수정/삭제 가능하도록 하는 기능

### 개선하고 싶은 부분

- 소스코드 크기 줄이기
- 성능 개선
- auth 부분 공부

## 프로젝트 구현

### git flow

![git flow](https://github.com/Ellie998/digitalSSOG-next/assets/89681100/a39e8825-8ee2-4142-8eaf-445aa63e088f)

- main
  - 최종 배포를 위한 브랜치
- hotfix
  - main에서 급하게 수정해야 할 때 사용하는 브랜치
- dev
  - 자잘한 개선을 포함하는 브랜치
- feature
  - dev 브랜치로부터 나와, 새로운 기능을 개발, 개선하기 위한 브랜치
