import React, { useState } from 'react';

function ContentPage({ title }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleApiExecute = () => {
    if (!file) {
      alert('파일을 선택하세요!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://your-api-endpoint.com/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API 응답:', data);
        alert('API 실행 성공!');
      })
      .catch((error) => {
        console.error('API 오류:', error);
        alert('API 실행 중 오류가 발생했습니다.');
      });
  };

  return (
    <div className="content-page">
      <h1>{title}</h1>
      <p>이 페이지에서는 파일을 선택하고 API를 실행할 수 있습니다.</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleApiExecute} className="api-button">
        API 실행
      </button>
    </div>
  );
}

export default ContentPage;
