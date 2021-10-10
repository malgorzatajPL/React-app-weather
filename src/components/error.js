import Lottie from "lottie-react";
import error from "../animations/error.json";
import { Card} from 'semantic-ui-react'

const description = [
  'Something went wrong. Please reset your applications.',
] 

const Error = () => (
  <Card>
    <Card.Content header='Error' />
    <Card.Content description={description} />
    <Card.Content extra>
    <Lottie animationData={error} />
    </Card.Content>
  </Card>
)

export default Error