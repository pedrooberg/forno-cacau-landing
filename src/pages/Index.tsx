
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center max-w-4xl mx-auto px-4">
          <img 
            src="/lovable-uploads/9dc461b4-a912-4b04-bfe0-9b603c4bfa5f.png" 
            alt="Forno da Cacau Logo" 
            className="w-64 md:w-96 mx-auto mb-8" 
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-6">
            Soluções Gastronômicas B2B
          </h1>
          <p className="text-xl text-gray-300">
            Tradição italiana, qualidade excepcional
          </p>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <SectionTitle>Quem Somos Nós</SectionTitle>
          <div className="prose prose-lg prose-invert max-w-3xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard title="Fornecimento de produtos pré-prontos" icon="truck" />
            <FeatureCard title="Logística dedicada" icon="truck" />
            <FeatureCard title="Comodato de fornos" icon="utensils" />
            <FeatureCard title="Treinamento da equipe" icon="utensils" />
          </div>
        </div>
      </section>

      {/* Nossa Equipe Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossa Equipe</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TeamCard
              name="Pedro Oberg"
              role="Direção Financeira e Comercial"
              whatsapp="(82) 99624-9229"
              email="pedrooberg@fornodacacau.com.br"
              image="/uploads/pedro.jpg"
            />
            <TeamCard
              name="Karolyn Mello"
              role="Direção de Operações e Produtos"
              whatsapp="(82) 99946-1983"
              email="karolyn.mello@fornodacacau.com.br"
              image="/uploads/karolyn.jpg"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
