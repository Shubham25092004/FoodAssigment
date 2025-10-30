const ProductCategory = ({ data }) => {
  return (
    <div className='card mb-3 text-center category-card'>
      <img 
        src={data.image}
        className="mx-auto d-block"
        alt={data.name}
        style={{ height: "90px", objectFit: "contain" }}
      />
      <div className='card-body'>
        <h4 className='card-title'>{data.name}</h4>
      </div>
    </div>
  )
}

export default ProductCategory
