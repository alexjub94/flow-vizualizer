import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ViewLister({
  views,
  selectView,
}: {
  views: {id: string, name: string}[];
  selectView: (view: string) => void;
}) {
  return (
    <div className="ViewLister">
      {views.map((view, i) => (
        <Card
          key={i}
          style={{ width: '18rem' }}
        >
          <Card.Body>
            <Card.Title>{view.name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant={"primary"} onClick={() => selectView(view.id)}>Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}