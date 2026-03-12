import { PhotoStack } from "./PhotoStack";

export function PhotosSection() {
  return (
    <section id="fotos" className="py-24 border-t border-border overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Fotos</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Registros dos nossos eventos. Clique nas fotos para navegar pela
            galeria.
          </p>
        </div>

        <div className="flex justify-center px-8 sm:px-0">
          <PhotoStack />
        </div>
      </div>
    </section>
  );
}
