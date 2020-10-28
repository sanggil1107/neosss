import React from 'react';

const Admin_Holiday = (props) => {
  const back = () => {
    props.history.push('/admin');
  }
  return (
    <div>
      <h1>ksj</h1>
      <button onClick={back}>뒤로가기</button>
    </div>
  );
};

export default Admin_Holiday;