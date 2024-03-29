import React, { useState } from 'react';
import { Card, Col, Modal } from 'antd';
import Container from '../Container/Container';
import { getStyle } from '../../constants/getStyle';
import * as Styled from './Cards.styled';

const { Meta } = Card;

const CardComponent = ({ cards, searchQuery }) => {
  const [selectedPost, setSelectedPost] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false); 

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.autor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.tags.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const keyOrder = ['tags', 'title',  'autor', 'date', 'views', 'text'];

  // Function to handle opening the modal and setting the selected post
  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalVisible(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <div>
        <Styled.RowCards  gutter={{ xs: 24, sm: 24, md: 24, lg: 48, xl: 48, xxl: 48 }}>
          {filteredCards.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8} xxl={8}>
              <Styled.CardComponent
                hoverable
                onClick={() => openModal(card)}
                cover={
                  <Styled.CardImage 
                    alt={card.title} 
                    src={card.img} 
                    srcSet={`${card.img} 1x, ${card.img_2x} 2x`}
                  />
                }
              >
                <Meta
                  description={
                    <div>
                      {keyOrder.map((key) => {
                        const value = card[key];
                        if (key === 'img' || key === 'img_2x') {
                          return null;
                        } else {
                          return (
                            <div key={key} style={getStyle(key, value)}>
                              {value}
                            </div>
                          );
                        }
                      })}
                    </div>
                  }
                />
              </Styled.CardComponent>
            </Col>
          ))}
        </Styled.RowCards>
        {/* Modal for displaying full post information */}
        <Modal
          open={isModalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {selectedPost && (
            <div>
              <h2>{selectedPost.title}</h2>
              <p>{selectedPost.text}</p>
            </div>
          )}
        </Modal>
      </div>
    </Container>
  );
};

export default CardComponent;
