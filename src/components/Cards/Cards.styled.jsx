import styled from 'styled-components';
import { Card, Row } from 'antd';

export const CardImage = styled('img')`
    border-radius: 0rem !important;

`

export const CardComponent = styled(Card)`
    border-radius: 0rem !important;
    border: none;
    margin-top: 3rem;

    .ant-card-body {
        padding-left: 0;
    }

    @media screen and (max-width: 570px) {
        margin-top: 0rem;
    }
`

export const RowCards = styled(Row)`

    @media screen and (max-width: 570px) {
        margin: 0rem !important;

        .ant-col {
            padding-right: 0 !important;
            padding-left: 0 !important;
        }

        .ant-card-cover img {
            width: 335px;
            margin: auto;
        }

    }
`