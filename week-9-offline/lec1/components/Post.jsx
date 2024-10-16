export function PostComponent({name, subtitle, time, image, description}){
    return <div style={{ width: 300, backgroundColor: "#dfe6e9", borderRadius: 10, borderColor: "gray", borderWidth: 2, padding: 10, marginTop: 20}}>
    <div style={{display: "flex"}}>
    <img src={image} style={{width: 50, height: 50, borderRadius: 50}} />
    <div style={{paddingLeft: 10, marginTop: 10}}>
        <b>{name}</b>
        <div>{subtitle}</div>
        {time && <div>{time}</div>}
    </div>
    </div>
    <div>{description}</div>
</div>
}