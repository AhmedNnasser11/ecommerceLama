import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = () => {
    return (
        <div style={{width: '100vw', height: '90vh', display: 'flex', justifyContent: 'center' ,  alignItems: 'center'}}>
           <CircularProgress color="primary" size='100px' />
        </div>
    )
}

export default LoadingPage
