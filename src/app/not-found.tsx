import Container from "@/components/Container";
import Button from "@/components/Button";
import Mark from "@/components/Mark";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center py-32">
      <Container className="text-center">
        <Mark title="" className="mx-auto h-14 w-14 text-sage" />
        <p className="eyebrow mt-8 text-forest/50">404</p>
        <h1 className="font-display text-display-sm mt-4 text-forest">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-forest/70">
          The link may be broken or the page may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/">Back home</Button>
          <Button href="/work" variant="outline">
            See the work
          </Button>
        </div>
      </Container>
    </section>
  );
}
