import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ContactCard from "@/components/ContactCard";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { CalendarClock, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center relative section-pattern">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-6">
            Soluções Gastronômicas B2B
          </h1>
          <p className="text-xl text-gray-300 mb-8 text-justify">
            Tradição italiana, qualidade excepcional
          </p>
          <Button 
            size="lg" 
            className="bg-forno-green hover:bg-forno-green/90"
            onClick={() => window.location.href = "mailto:faleconosco@fornodacacau.com.br?subject=Avaliação Gratuita - Investimento"}
          >
            <CalendarClock className="mr-2" />
            Agende uma Avaliação Gratuita
          </Button>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>Quem Somos Nós</SectionTitle>
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto text-justify">
            <p className="text-lg mb-6">
              Com 22 anos de experiência em pizzarias e restaurantes, o Forno da Cacau renasce como líder em soluções gastronômicas B2B, atendendo bares, restaurantes, pizzarias, hotéis, pousadas, supermercados e resorts com excelência.
            </p>
            <p className="text-lg">
              Nossos produtos seguem a tradição napolitana italiana, com massas de longa fermentação, molhos de tomates ricos em umami e outros produtos que demandam tempo para serem feitos, armazenamento adequado, experiência e dedicação de cozinha para um resultado excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Produtos Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Produtos</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              title="Pizzas Pré-assadas"
              description="Médias ou individuais, embaladas a vácuo. Versões: tradicional, sem glúten ou sem glúten e sem lactose"
            />
            <ProductCard 
              title="Discos de Pizza"
              description="Tradicional ou sem glúten, com molho de tomates San Marzano"
            />
            <ProductCard 
              title="Pães Artesanais"
              description="Pão italiano tradicional e versão sem glúten"
            />
            <ProductCard 
              title="Molho Demi Glace"
              description="Fundo de carne escuro, com 48 horas de cocção em baixa temperatura, sem conservantes"
            />
            <ProductCard 
              title="Massa de Pizza Crua"
              description="Tradicional ou sem glúten, boleada e pronta para uso"
            />
            <ProductCard 
              title="Embalagens Personalizadas"
              description="Caixas de pizza com a sua logomarca"
            />
          </div>
        </div>
      </section>

      {/* Solução Integrada Section */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>Solução Integrada</SectionTitle>
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto text-justify mb-8">
            <p>
              Investimos diretamente no seu ponto comercial, oferecendo:
            </p>
            <ul className="list-disc pl-6">
              <li>Geladeiras e freezers em comodato</li>
              <li>Fornos profissionais em comodato</li>
              <li>Letreiro luminoso personalizado em comodato</li>
              <li>Harmonização completa do cardápio</li>
              <li>Abastecimento regular de produtos</li>
              <li>Treinamento especializado da equipe</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard title="Fornecimento de produtos pré-prontos" icon="truck" />
            <FeatureCard title="Logística dedicada" icon="truck" />
            <FeatureCard title="Comodato de fornos" icon="utensils" />
            <FeatureCard title="Treinamento da equipe" icon="utensils" />
          </div>
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="bg-forno-green hover:bg-forno-green/90"
              onClick={() => window.location.href = "mailto:faleconosco@fornodacacau.com.br?subject=Avaliação de Investimento"}
            >
              <CalendarClock className="mr-2" />
              Solicite uma Avaliação de Investimento
            </Button>
          </div>
        </div>
      </section>

      {/* Canais de Atendimento B2B Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Canais de Atendimento B2B</SectionTitle>
          <div className="glass-card max-w-lg mx-auto text-center">
            <div className="space-y-4">
              <a href="mailto:faleconosco@fornodacacau.com.br" className="flex items-center justify-center gap-2 hover:text-forno-green transition-colors">
                <Mail className="w-4 h-4" />
                faleconosco@fornodacacau.com.br
              </a>
              <a href="tel:+558299614-6604" className="flex items-center justify-center gap-2 hover:text-forno-green transition-colors">
                <Phone className="w-4 h-4" />
                +55 82 99614-6604
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Direção Executiva Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Direção Executiva</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ContactCard
              name="Pedro Oberg"
              role="Direção Financeira e Comercial"
              email="pedrooberg@fornodacacau.com.br"
              whatsapp="(82) 99624-9229"
            />
            <ContactCard
              name="Karolyn Mello"
              role="Direção de Operações e Produtos"
              email="karolyn.mello@fornodacacau.com.br"
              whatsapp="(82) 99946-1983"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
