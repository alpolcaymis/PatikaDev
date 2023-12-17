import { Button } from "test-button-alp";
import "./index.css";
export default function App() {
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <Button type="primary">Selam</Button>
        <Button type="default">Selam</Button>
        <Button type="dashed">Selam</Button>
        <Button type="text">Selam</Button>
        <Button type="link">Selam</Button>
      </div>
    </div>
  );
}
