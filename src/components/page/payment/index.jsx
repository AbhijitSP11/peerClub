import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { API_LINK } from '../../../config';
import { ServiceContext } from '../../../Services';
import Input from '../../ui/input';
import styles from './styles.module.scss';

const PaymentPage = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const AuthContext = useContext(ServiceContext);
    console.log('authContext', AuthContext.auth);
    const [name, setName] = useState(
        AuthContext.auth !== null ? AuthContext.auth?.user.name : ''
    );
    const [email, setEmail] = useState(
        AuthContext.auth !== null ? AuthContext.auth?.user.email : ''
    );
    const [cardNumber, setCardNumber] = useState('');
    const [expire, setExpire] = useState('');
    const [cvc, setCvc] = useState('');

    if (AuthContext.auth === null) {
        navigate('/');
    }
    useEffect(() => {
        const getService = async () => {
            const res = await axios.get(
                `${API_LINK}/api/courses/${id}?populate=*`
            );
            console.log('response is', res);
            setData(res.data.data);
        };

        getService();
        window.scrollTo(0, 0);
    }, []);

    console.log('data is ', data);

    if (data === null) {
        return (
            <div
                style={{
                    width: '100vw',
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Oval
                    height={80}
                    width={80}
                    color='#bd3333'
                    wrapperStyle={{}}
                    wrapperClass=''
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor='#bd333391'
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                />
            </div>
        );
    }

    const purchaseCourse = (e) => {
        e.preventDefault();
        try {
            axios.post(`${API_LINK}/api/purchases`, {
                data: {
                    userid: AuthContext.auth.user.id,
                    cid: id,
                    cname: data.attributes.title,
                    cimage: data.attributes.image.data.attributes.url,
                    cvideo: data.attributes.video.data.attributes.url,
                },
            });
            navigate('/learning');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div>
                    <h1>{data?.attributes.title}</h1>
                </div>
                <br />
                <div>
                    <p>{data?.attributes.description}</p>
                </div>
                <br />
                <div>
                    <h3>Price : {data.attributes.price} Rs.</h3>
                </div>
            </div>
            <div className={styles.right}>
                <div>
                    <h3>Pay with Card</h3>
                </div>
                <div>
                    <img
                        src='../../../../dist/static/debitCard.png'
                        alt=''
                        height={72}
                    />
                </div>
                {/* <div>
          <input placeholder="Enter your email" />
        </div>
        <div>
          <input placeholder="xxxx-xxxx-xxxx" />
        </div>
        <div>
          <input placeholder="xxxx-xxxx-xxxx" />
          <input placeholder="xxxx-xxxx-xxxx" />
        </div> */}
                <form action='' onSubmit={purchaseCourse}>
                    <Input
                        label={'Email'}
                        type={'email'}
                        placeholder={'Enter your email here'}
                        onChange={(e) => {
                            setEmail(e);
                        }}
                        value={email}
                    />
                    <Input
                        label={'Name'}
                        type={'text'}
                        placeholder={'Enter your name here ...'}
                        onChange={(e) => {
                            setName(e);
                        }}
                        value={name}
                    />
                    <Input
                        label={'Card Number'}
                        type={'text'}
                        placeholder={'xxxx-xxxx-xxxx-xxxx'}
                        onChange={(e) => {
                            setCardNumber(e);
                        }}
                    />
                    <div>
                        <Input
                            label={'Expires'}
                            type={'text'}
                            placeholder={'MM/YYYY'}
                            onChange={(e) => {
                                setExpire(e);
                            }}
                        />
                        <div></div>
                        <Input
                            label={'CVC'}
                            type={'text'}
                            placeholder={'CVC'}
                            onChange={(e) => {
                                setCvc(e);
                            }}
                        />
                    </div>
                    <button className={styles.button} type='submit'>
                        Click to Pay
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentPage;
