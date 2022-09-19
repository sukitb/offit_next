import Image from 'next/image';
import styled from '@emotion/styled';
import CommentForm from '../../forms/CommentForm/CommentForm';

const Card = ({ title, image, duration, createActivityAt }) => {
  const Card = styled.div`
    width: 240px;
    border: #50a3a2 1px solid;
    padding: 15px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px #3f52a045;
    background-color: #ffff;
    height: 100%;
  `;

  return (
    <Card>
      <Image src={image} width={250} height={250} alt="activityImg" />
      <h2>{title}</h2>
      <h3>{duration}</h3>
      <h3>{createActivityAt}</h3>
      <CommentForm />
    </Card>
  );
};

export default Card;
