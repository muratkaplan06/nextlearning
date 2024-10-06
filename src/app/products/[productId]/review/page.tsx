import {notFound} from 'next/navigation';

export default function reviewDetail({params}:
{params: {productId: string, reviewId: string}}) {
    if(parseInt(params.reviewId)>1000){
        return notFound();
    }
    console.log('reviewDetail', params);
    return (<>
        <h1>Review Detail {params.reviewId} for Product {params.productId}</h1>
        <p>review 1</p>
        <p>review 2</p>
    </>);
}