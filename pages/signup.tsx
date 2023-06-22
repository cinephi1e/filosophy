import Layout from "@/components/common/Layout";
import Link from "next/link";
import React from "react";

const signup = () => {
  return (
    <Layout>
      <div className="w-[60%] h-auto mx-auto my-20 bg-white border-black flex flex-col justify-center">
        {/* 로그인/회원가입 분류 */}
        <div className="h-14 flex">
          <Link
            href="login"
            className="flex items-center justify-center w-full h-full text-center text-2xl font-semibold border border-gray-300"
          >
            로그인
          </Link>
          <button className="w-full h-full text-center border-4 border-r-0 border-l-0 border-b-0 border-black text-2xl font-semibold">
            회원가입
          </button>
        </div>
        <form className="px-20 py-16 pb-10">
          <div className="flex flex-col">
            {/* 프로필 이미지 업로드 */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/680px-Default_pfp.svg.png?20220226140232"
              className="w-24 y-24 rounded-full mx-auto mb-4"
            />
            {/* <input type="file" className="w-1/3 mx-auto mt-4 mb-6" /> */}
            {/* 개인정보 입력 */}
            <input
              placeholder="이메일을 입력해주세요."
              className="w-[80%] border border-gray-300 mb-4 rounded-sm mx-auto p-2"
            />
            <input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              className="w-[80%] border border-gray-300 mb-4 rounded-sm mx-auto p-2"
            />
            <input
              placeholder="비밀번호를 다시 한 번 입력해주세요."
              type="password"
              className="w-[80%] border border-gray-300 mb-4 rounded-sm mx-auto p-2"
            />
            <input
              placeholder="닉네임을 입력해주세요."
              className="w-[80%] border border-gray-300 mb-4 rounded-sm mx-auto p-2"
            />
            {/* 약관 */}
            <text className="w-[80%] h-32 overflow-y-scroll mx-auto mt-2 text-gray-400">
              가입 관련 약관이 들어갈 예정입니다. 가입 관련 약관이 들어갈
              예정입니다. 가입 관련 약관이 들어갈 예정입니다. 가입 관련 약관이
              들어갈 예정입니다. 가입 관련 약관이 들어갈 예정입니다. 가입 관련
              약관이 들어갈 예정입니다. 가입 관련 약관이 들어갈 예정입니다. 가입
              관련 약관이 들어갈 예정입니다. 가입 관련 약관이 들어갈 예정입니다.
              가입 관련 약관이 들어갈 예정입니다. 가입 관련 약관이 들어갈
              예정입니다. 가입 관련 약관이 들어갈 예정입니다. 가입 관련 약관이
              들어갈 예정입니다.{" "}
            </text>
            <div className="w-[80%] flex mt-4 mx-auto">
              <input type="checkbox" />
              <span className="font-semibold text-sm ml-1">
                내용을 확인했습니다.
              </span>
            </div>
            <button className="w-[80%] h-12 bg-black  text-white font-bold rounded-sm mt-6 mx-auto">
              가입하기
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default signup;
