function CardImageS3({ deleteFromS3, imageKey, imageDataURL }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={imageDataURL} className="w-50 h-48" alt="" />
        </div>
    );
}

export default CardImageS3;
