import Layout from "@/components/common/Layout";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <Layout>
      <div className="w-[60%] h-auto mx-auto mt-20 bg-white border-black flex flex-col justify-center">
        {/* 로그인/회원가입 분류 */}
        <div className="h-14 flex">
          <button className="w-full h-full text-center border-4 border-r-0 border-l-0 border-b-0 border-black text-2xl font-semibold">
            로그인
          </button>
          <Link
            href="signup"
            className="flex items-center justify-center w-full h-full text-center text-2xl font-semibold border border-gray-300"
          >
            회원가입
          </Link>
        </div>
        {/* 이메일/비밀번호 로그인 */}
        <form className="p-20 pb-10">
          <div className="flex flex-col">
            <input
              placeholder="이메일을 입력해주세요."
              className="w-[80%] border border-gray-300 mb-4 rounded-sm mx-auto p-2"
            />
            <input
              placeholder="비밀번호를 입력해주세요."
              type="password"
              className="w-[80%] border border-gray-300 rounded-sm mx-auto p-2"
            />
            <div className="w-[80%] flex mt-2 mx-auto">
              <input type="checkbox" />
              <span className="text-gray-400 text-sm ml-1">이메일 저장</span>
            </div>
            <button className="w-[80%] h-12 bg-black  text-white font-bold rounded-sm mt-6 mx-auto">
              로그인
            </button>
          </div>
        </form>
        {/* 이메일 로그인/소셜 로그인 구분선 */}
        <div className="w-[65.5%] mx-auto flex items-center justify-around">
          <hr className="w-[40%]" />
          <span className="text-gray-400">OR</span>
          <hr className="w-[40%]" />
        </div>
        {/* 소셜 로그인 */}
        <div className="w-[62%] mx-auto flex flex-col my-8">
          <button className="w-full h-12 border rounded-sm bg-slate-50 flex items-center px-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1176px-Google_%22G%22_Logo.svg.png"
              className="w-[7%] -mr-6"
            />
            <span className="font-semibold mx-auto">구글 로그인</span>
          </button>
          <button className="w-full h-12 border rounded-sm bg-[#02c73c] flex items-center px-2 my-4 overflow-hidden">
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1504499304/in36bktetqoapibgeabo.png"
              className="w-[11%] -mr-10"
            />
            <span className="font-semibold  mx-auto text-white">
              네이버 로그인
            </span>
          </button>
          <button className="w-full h-12 border rounded-sm bg-[#fddc3f] flex items-center px-2 overflow-hidden">
            <img
              src="https://cdn.imweb.me/thumbnail/20220403/a8e484f2dfe39.png"
              className="w-[11%] -mr-10"
            />
            <span className="font-semibold  mx-auto">카카오 로그인</span>
          </button>
        </div>
        {/* 이메일/비밀번호 찾기 */}
        <button className="font-semibold underline text-lg text-orange-500 m-auto pt-8 pb-14">
          이메일 / 비밀번호 찾기
        </button>
      </div>
    </Layout>
  );
};

export default login;
