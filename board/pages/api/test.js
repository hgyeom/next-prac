// pages의 api폴더 안에 만든 파일과 폴더는 자동으로 서버기능의 URL이 됨.
// api/test(현재 파일 이름이 test)라는 URL로 요청을 보내면 test.js의 코드가 자동 실행.
// 두 번째 파라미터(response)를 이용해 status와 기타 등등을 응답할 수 있음.

export default function handler(request, response) {
  if (request.method == 'POST') {
    return response.status(200).json('POST 요청 완료');
  }
}
