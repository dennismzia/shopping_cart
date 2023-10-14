import {Row, Col} from "react-bootstrap";
import StoreItems from "../data/items.json";

export const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row>
      {
        StoreItems.map((item)=>(
          <Col>{JSON.stringify(item)}</Col>
        ))
      }
    </Row>
    
    </>
  )
}
