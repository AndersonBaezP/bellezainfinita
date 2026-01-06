import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info */}
          <div>
            <h3 className="font-bold mb-4">INFORMACIÓN DE INTERÉS</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/privacidad" className="hover:text-pink-500">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="/videos" className="hover:text-pink-500">
                  Vídeos
                </a>
              </li>
              <li>
                <a href="/envios" className="hover:text-pink-500">
                  Envíos
                </a>
              </li>
              <li>
                <a href="/devoluciones" className="hover:text-pink-500">
                  Cambios y devoluciones
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">CONTACTO</h3>
            <p className="text-sm text-gray-600 mb-4">
              Valeria@bellezainfinita.ec
            </p>
            <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full">
              CONTACTAR
            </Button>
          </div>

          {/* Social & Brand */}
          <div>
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com"
                className="text-pink-500 hover:text-pink-600"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.5c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.4-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9 0 13.9-7.5 13.9-13.9v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-500 hover:text-pink-600"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0-2.2c-3.3 0-3.7 0-5 .1-1.3.1-2.1.2-2.9.5-.8.3-1.5.7-2.1 1.4-.7.7-1.1 1.3-1.4 2.1-.3.8-.5 1.6-.5 2.9-.1 1.3-.1 1.7-.1 5s0 3.7.1 5c.1 1.3.2 2.1.5 2.9.3.8.7 1.5 1.4 2.1.7.7 1.3 1.1 2.1 1.4.8.3 1.6.5 2.9.5 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.1-.2 2.9-.5.8-.3 1.5-.7 2.1-1.4.7-.7 1.1-1.3 1.4-2.1.3-.8.5-1.6.5-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.2-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.1-.7-.7-1.3-1.1-2.1-1.4-.8-.3-1.6-.5-2.9-.5-1.3-.1-1.7-.1-5-.1z" />
                  <path d="M12 6.9c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1-2.3-5.1-5.1-5.1zm0 8.4c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3z" />
                  <circle cx="17.3" cy="6.7" r="1.2" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                className="text-pink-500 hover:text-pink-600"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.6 3.6H4.4C3.6 3.6 3 4.2 3 5v14c0 .8.6 1.4 1.4 1.4h15.2c.8 0 1.4-.6 1.4-1.4V5c0-.8-.6-1.4-1.4-1.4zM8.8 17.8H6.2V9.9h2.6v7.9zm-1.3-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm10.3 9h-2.6v-3.8c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v3.9H9.6V9.9h2.5v1.1h.04c.3-.6 1.1-1.3 2.3-1.3 2.5 0 2.9 1.6 2.9 3.7v4.4z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/logOrig.svg"
                alt="GlossyCandy"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold text-pink-500">
                GlossyCandy
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © {new Date().getFullYear()} Todos los derechos reservados.
              GlossyCandy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
