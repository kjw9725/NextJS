NextJS

리액트

- 라이브러리
- 커스텀이 자유로움 ex) router를 사용하거나 css로 스타일을 적용하거나
- UI 인터페이스를 빌드하는데 사용하는 라이브러리

NextJS

- 프레임워크
- 프레임워크가 우리 코드를 호출한다 ex) 프레임워크가 제공하는 규칙에 따라 코드를 작성 및 배치해야한다
- 기존에는 보안을 위해 백엔드에서 API를 만들어서 백엔드와 프론트엔드 사이의 API를 통해 통신해야했으나 Nextjs를 사용하면 그럴 필요가 없어진다(서버 사이드 렌더링)

NextJS 시작

1. 터미널에서 npm init -y 입력
2. package.json에 scripts안에 "dev": "next dev" 추가
3. npm install react@latest next@latest react-dom@latest 입력(react, next, react-dom 최신버젼설치)
4. app폴더 생성후 안에 page.tsx 또는 page.jsx생성 (★app폴더와 page는 이름및 대소문자까지 일치해야함)
5. npm run dev 입력(app/layout.tsx자동생성)후 Local에 있는 주소 오픈 ex)http://localhost:3000

Routes 사용법

1.  app폴더안에 새 페이지로 사용할 폴더를 생성 및 해당 폴더안에 page.tsx 생성(폴더안에 새로운 폴더를 만들어서 page를 만드는것도 가능)

- 새로운 폴더를 만들어서 page.tsx가 아닌 다른 이름의 tsx, jsx파일을 만들어서 page.tsx에서 해당 컴포넌트를 불러오는건 가능하다(page url로 사용은 불가)
- 폴더를 괄호로 묶으면 페이지 url을 생성하지 않는다 ex) (home) (movies)

2.  Link태그를 사용하면 클릭시 원하는 페이지로 이동되게 할 수 있다 ex) <Link href="/about-us">About Us</Link>

Not-found

1.  app폴더안에 not-found.tsx 생성하면 하위 url을 잘못입력시 해당 컴포넌트를 노출시킨다(Error 페이지 만들때 활용)

usePathname()

- usePathname()을 사용하면 해당 페이지의 url path를 가져올 수 있다

Layout

1.  해당 페이지의 코드를 Layout에서 렌더링해서 보여줌(모든 페이지 공통으로 보여줘야할 부분들은 여기에 추가해준다)
2.  특정 페이지에 laayout.tsx를 추가해서 해당페이지의 layout을 따로 만들수도 있다(해당 페이지와 그 하위 페이지까지 적용이 된다. 중첩)

Metadata
export const metadata = {
title: "Home | Next Movies",
description: "The best movies on thje best framework",
};
title: 홈페이지 제목
description: 홈페이지 설명
타입스크립트 형태, 객체 형태, 문자형태 다양하게 설정가능
각 페이지마다 설정 가능하며 병합되서 적용된다 ex)상위폴더에서 title이 설정되어 있고 하위폴더설정되어있으면 하위폴더는 하위폴더의 title이 적용

Dynamic Routes

- 해당 페이지 하위의 동적url을 사용할수 있게해준다 ex) about-us/1241241
- 해당 페이지 하위로 어떤 문자가 들어가도 정상적으로 동작하게 해줌(상세페이지 만들때 유용)

1. 동적으로 사용하고 싶은 페이지 폴더 하위에 []로 매핑해서 폴더를 생성함 ex)[id]

2. 하위 페이지에서는 { params: { 폴더이름 } } 이런식으로 뒤에 추가된 값을 불러올 수 있다 ex) export default function MovieDetail({ params: { id } })

Loading
폴더안에 loading.tsx(또는 loading.jsx) 파일을 생성하면 서버에서 loading할때 loading 화면을 생성할수 있다

★Suspense: 렌더링이 준비되지 않은 컴포넌트가 있을때 로딩 화면을 보여주고 로딩이 완료되면 해당 컴포넌트를 보여주는 React의 기능 (fallback안에 로딩화면을 넣는다)
ex) <Suepense fallback={loading}> <Suepense />

Error

- 에러페이지를 사용할 폴더안에 error파일생성(error.tsx, error.jsx) 하면 에러 발생시 해당 컴포넌트를 화면에 노출함 (※"use client" 필수)

Style

1. 파일이름.module.css 파일로 생성
2. 적용하고 싶은 컴포넌트에서 import styles from './파일이름.module.css';
3. 적용할 태그에 className적용 ex) className={styles.nav}

useRouter()

- 페이지 이동을 Link태그로 감싸지 않고 onmclick으로 가능하게 한다
  "use client" // onclick은 서버에 존재하지않기 때문에 선언
  import {useRouter} from "next/navigation"; //경로 "next/navigation" 필수

const router = useRouter();
const goPage = () =>{
router.push(`/movies/${id}`); //이동할 페이지 url
}

Vercel 배포방법

1. 완성 프로젝트 깃허브에 올리기
2. vercel 회원가입 및 로그인 -> Add new -> Project -> 프로젝트 올린 repo import -> 이름 설정후 Deploy
3. package.json scripts안에 "start": "next start", "build": "next build" 추가(추가 후 깃허브 푸시)
4. VScode 터미널에서 npm run build(빌드시 발생하는 에러들은 해결해야함)
