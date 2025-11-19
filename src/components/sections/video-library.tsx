import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { videoLibrary } from "@/data/site-content";

export function VideoLibrary() {
  return (
    <section
      id="videos"
      className="rounded-3xl border bg-white p-8 shadow-sm"
    >
      <div className="mb-6">
        <p className="text-sm uppercase tracking-wide text-neutral-500">
          Videos autoinstructivos
        </p>
        <h2 className="text-3xl font-semibold">Aprende a tu ritmo</h2>
        <p className="text-neutral-600">
          Biblioteca con cápsulas grabadas desde laboratorios, talleres y aulas modelo.
          Disponibles 24/7 con descarga de materiales complementarios.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {videoLibrary.map((video) => (
          <Card key={video.title} className="h-full border-neutral-200">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Badge variant="secondary">{video.topic}</Badge>
                <span>{video.duration}</span>
              </div>
              <CardTitle className="text-xl">{video.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-neutral-600">
              <span>Nivel: {video.level}</span>
              <Badge className="bg-neutral-900 text-white">Ver ahora</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
