
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import TeamCard from "@/components/TeamCard";
import { Pizza, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <img src="/lovable-uploads/9dc461b4-a912-4b04-bfe0-9b603c4bfa5f.png" alt="Forno da Cacau Logo" className="w-64 md:w-96 mx-auto mb-8" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Soluções Gastronômicas Profissionais
          </h1>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <SectionTitle>Quem Somos Nós</SectionTitle>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg mb-6">
              Com 22 anos de experiência em pizzarias e restaurantes, o Forno da Cacau renasce como líder em soluções gastronômicas B2B, atendendo bares, restaurantes, pizzarias, hotéis, pousadas, supermercados e resorts com excelência.
            </p>
            <p className="text-lg mb-6">
              Nossos produtos seguem a tradição napolitana italiana, com massas de longa fermentação, molhos de tomates ricos em umami e outros produtos que demandam tempo, armazenamento adequado, experiência e dedicação de cozinha para um resultado excepcional.
            </p>
            <p className="text-lg">
              Somos fornecedores profissionais com track record de mais de 20 operações atendidas.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Missão Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossa Missão</SectionTitle>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg mb-6">
              Nossa missão é trazer facilidade, qualidade e agilidade para os empresários, oferecendo produtos de primeira linha em etapas avançadas, diminuindo o tempo de espera do cliente final, reduzindo custos trabalhistas e tempo de treinamento de colaboradores.
            </p>
            <p className="text-lg">
              Com grande valor agregado, atendemos a uma demanda emergente do mercado que busca cada vez mais qualidade, técnica e atendimento a necessidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Produtos Section */}
      <section className="py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Produtos</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <Pizza className="w-8 h-8 text-forno-green mb-4" />
              <h3 className="text-xl font-playfair mb-4">Pizzas Pré-assadas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Médias ou individuais</li>
                <li>Embaladas a vácuo</li>
                <li>Versões tradicional e sem glúten</li>
                <li>Opções sem lactose</li>
              </ul>
            </div>
            {/* Add more product cards */}
          </div>
        </div>
      </section>

      {/* Solução Integrada Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Oferecemos Uma Solução Integrada</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-playfair mb-6">Garantimos a qualidade do produto e o sucesso dos nossos parceiros.</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-forno-green" />
                  <span>Fornecimento de produtos pré-prontos</span>
                </li>
                {/* Add more items */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe Section */}
      <section className="py-20 bg-black/80">
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
