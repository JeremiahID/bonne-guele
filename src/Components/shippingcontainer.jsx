import web from '../Images/web.svg'
import loop from '../Images/loop.svg';
import creditcard from '../Images/credit-card.svg';
import chat from '../Images/chat.svg';

const shippingStorage = [
    {   
        id : 1,
        svg: web,
        name :  'FREE SHIPPING',
        innerText : 'Across The African Union From 200$  purchase'
    },
    {   
        id : 2,
        svg: loop,
        name :  'FREE RETURNS',
        innerText : '30 days to change your mind We will take care of everything'
    },
    {
        id : 3,
        svg: creditcard,
        name :  'CREDIT CARDS',
        innerText : 'By Credit Card Secure Option'
    },
    {   
        id : 4,
        svg: chat,
        name :  'EXPRESS CUSTOMER SERVICE',
        innerText : 'Lightning Response from Monday - Friday'
    }
];

export default shippingStorage;