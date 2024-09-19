import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    height: 100vh;

    .title {
        display: flex;
        align-items: center;
        gap: .5rem;
        position: absolute;
        z-index: 1;
        left: 1.5rem;
        top: 2rem;
        
        img {
            width: 2rem;
        }
        
        h1 {
            font-size: 25px;
            font-weight: 600;
            color: rgb(42, 109, 73);
        }
    }
    
    .footer {
        position: absolute;
        z-index: 1;
        right: 1.5rem;
        bottom: 2rem;

        h1 {
            font-weight: 600;
            color: rgb(254, 254, 227);
        }
    }
    
    .pages {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .page1 {
        background-color: rgb(254, 254, 227);
    }
    
    .page2 {
        background-color: rgb(42, 109, 73);
    }

    .containerSelect {
        display: flex;
        align-items: center;
        gap: 1rem;

        p {
            font-size: 35px;
            font-weight: 700;
        }
        
        select {
            width: 9rem;
            background-color: green;
            border: none;
            border-radius: 5px;
            font-family: "Nunito", sans-serif;
            font-size: 30px;
            padding: .2rem .2rem .2rem .5rem;
            font-weight: 800;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-repeat: no-repeat;
            background-position: right .5rem top 50%;
            background-size: 2rem auto;
            outline: none;
        }
    }
    
    .select1 {
        p {
            color: rgb(42, 109, 73);
        }
        
        select {
            background-color: rgb(42, 109, 73);
            color: rgb(254, 254, 227);
            background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23FEFEE3%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.70711%209.71069C5.31658%2010.1012%205.31658%2010.7344%205.70711%2011.1249L10.5993%2016.0123C11.3805%2016.7927%2012.6463%2016.7924%2013.4271%2016.0117L18.3174%2011.1213C18.708%2010.7308%2018.708%2010.0976%2018.3174%209.70708C17.9269%209.31655%2017.2937%209.31655%2016.9032%209.70708L12.7176%2013.8927C12.3271%2014.2833%2011.6939%2014.2832%2011.3034%2013.8927L7.12132%209.71069C6.7308%209.32016%206.09763%209.32016%205.70711%209.71069Z%22%20fill%3D%22%23FEFEE3%22%2F%3E%3C%2Fsvg%3E');
        }
    }
    
    .select2 {
        p {
            color: rgb(254, 254, 227);
        }
        
        select {
            background-image: url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%232A6D49%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.70711%209.71069C5.31658%2010.1012%205.31658%2010.7344%205.70711%2011.1249L10.5993%2016.0123C11.3805%2016.7927%2012.6463%2016.7924%2013.4271%2016.0117L18.3174%2011.1213C18.708%2010.7308%2018.708%2010.0976%2018.3174%209.70708C17.9269%209.31655%2017.2937%209.31655%2016.9032%209.70708L12.7176%2013.8927C12.3271%2014.2833%2011.6939%2014.2832%2011.3034%2013.8927L7.12132%209.71069C6.7308%209.32016%206.09763%209.32016%205.70711%209.71069Z%22%20fill%3D%22%232A6D49%22%2F%3E%3C%2Fsvg%3E);
            background-color: rgb(254, 254, 227);
            color: rgb(42, 109, 73);
        }
    }

    .values {
        margin-top: 3rem;
        width: 25rem;
        height: 4rem;
        font-size: 60px;
        font-family:  "Nunito", sans-serif;
        font-weight: 800;
        border: none;
        background: none;
        outline: none;
        text-align: center;
    }
    
    .valueInput {
        color: rgb(42, 109, 73);
        margin: 0;
    }

    .containerinput {
        display: flex;
        align-items: center;
        gap: 5rem;
        margin-top: 3rem;

        p {
            color: rgb(42, 109, 73);;
        }
    }
    
    .containerValue {
        display: flex;
        align-items: center;
        gap: 5rem;
        margin-top: 3rem;

        p {
            color: rgb(254, 254, 227);
        }
    }

    .symbol {
        font-size: 40px;
        font-family:  "Nunito", sans-serif;
        font-weight: 800;
    }
    
    .valueResponse {
        width: 25rem;
        text-align: center;
        
        span {
            font-size: 60px;
            font-family:  "Nunito", sans-serif;
            font-weight: 800;
            margin-bottom: 10rem;
            color: rgb(254, 254, 227);
            max-width: 100vw;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
            word-break: break-all;
        }
    }
    
    .valueLineInput {
        width: 100%;
        height: .4rem;
        border-radius: 20px;
        background-color: rgb(42, 109, 73);
    }
    
    .valueLineResponse {
        width: 100%;
        height: .4rem;
        border-radius: 20px;
        margin-top: .5rem;
        background-color: rgb(254, 254, 227);
    }
`;