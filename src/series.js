import React, {useState, Fragment} from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import './App.css';

const Series = () => {
    const [series, setSeries] = useState([]);
    const [error, setError] = useState();
    const [isFetchingSeries, setIsFetchingSeries] = useState(false);

    const getSeries = (values) => {
        setIsFetchingSeries(true);
        setError(null);
        axios
              .post(`http://localhost:5000/task/fibonacci-series`, {
                length: values.number,
                prime_only: values.prime
              })
              .then(response => {
                setSeries(response.data.data);
                setIsFetchingSeries(false);
              })
              .catch(function() {
                setError('Oops Couldnt Get! Please Try Again.');
              });
    }

    return (
        <Fragment>
            <Formik
                initialValues={{ prime: false }}
                onSubmit={(values) =>  getSeries(values)}
            >
            {(props) => (
                <form className="series-form" onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label>Tell me till how many numbers you need in the series</label>
                        <input type="number" className="form-control" name="number" required onChange={props.handleChange} value={props.values.number}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" name="prime" onChange={props.handleChange} value={props.values.prime}/>
                        <label className="form-check-label" >Show me prime numbers only</label>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isFetchingSeries}>Get Fibonacci!</button>
                    
                </form>
            )}
            </Formik> 
            <div className="row series-wrap flex-row mt-5">
            {error && <small className="danger">{error}</small>}
                {series.length > 0 && series.map((number) => <div className="series-item col">{number}</div>)}
            </div>
        </Fragment>
    )
};

export default Series;