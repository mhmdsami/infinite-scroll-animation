import { Scroll, Card } from "./components";

export default function App() {
  return (
    <main className="flex items-center justify-center h-screen overflow-clip">
      <div className="flex gap-5">
        {[...Array(3)].map((_, i) => (
          <Scroll key={i} reverse={i % 2 === 0} duration={60}>
            {[...Array(10)].map((_, i) => (
              <Card key={i}>Card {i + 1}</Card>
            ))}
          </Scroll>
        ))}
      </div>
    </main>
  );
}
