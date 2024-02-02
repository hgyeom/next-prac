'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function GoWritePage() {
  let router = useRouter();
  //   let url = usePathname(); 현재 경로
  //   let params = useSearchParams(); 쿼리 스트링

  return (
    <button onClick={() => router.push('/write')} className="navi-button">
      글 작성
    </button>
  );
}
