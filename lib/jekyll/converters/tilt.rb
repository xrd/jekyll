module Jekyll
  module Converters
    class Tilt < Converter
      safe true

      TILT_EXT_REXEP = %w[
        ad adoc asciidoc
        str
        haml
        sass scss
        less
        builder
        rdoc
        radius
        mab
        coffee
        wiki creole mediawiki mw
        yajl
        rcsv
        slim
        org
      ].map{ |e| "\.#{e}" }.join("|")

      def matches(ext)
        @ext = ext
        ext =~ Regexp.new("(#{TILT_EXT_REXEP})", Regexp::IGNORECASE)
      end

      def convert(content)
        Tilt.new(@ext).render(content)
      end
    end
  end
end
