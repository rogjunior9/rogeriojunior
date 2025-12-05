import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-8 font-display uppercase tracking-wider font-bold">
                    <ArrowLeft className="mr-2" size={20} />
                    Voltar para Home
                </Link>

                <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-8 text-white">
                    Política de Privacidade
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed font-sans font-light">
                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">1. Introdução</h2>
                        <p>
                            A sua privacidade é importante para nós. É política do Rogério Júnior respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Rogério Júnior, e outros sites que possuímos e operamos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">2. Coleta de Informações</h2>
                        <p className="mb-4">
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                        </p>
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">3. Uso de Dados do Google</h2>
                        <div className="space-y-4 mb-8">
                            <h3 className="text-xl font-bold text-white">Dados Acessados</h3>
                            <p>
                                Nosso aplicativo pode acessar determinados dados da sua conta Google, dependendo das funcionalidades que você autorizar. Os tipos de dados podem incluir:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Informações de Perfil:</strong> Nome, endereço de e-mail e imagem do perfil para autenticação e personalização.</li>
                                <li><strong>Dados de Serviços (Drive, Gmail, Calendar):</strong> Acesso restrito e específico suprido apenas quando você ativa automações que requerem interação com estes serviços (ex: criar arquivos, agendar reuniões).</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-6">Como Usamos seus Dados</h3>
                            <p>
                                O uso das informações recebidas das APIs do Google obedece à <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de Uso Limitado.
                            </p>
                            <p>
                                Utilizamos esses dados exclusivamente para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Executar as automações solicitadas por você (ex: salvar um relatório no seu Drive).</li>
                                <li>Melhorar a funcionalidade dos nossos serviços digitais.</li>
                            </ul>
                            <p>
                                <strong>Não</strong> compartilhamos seus dados do Google com terceiros para fins publicitários, nem utilizamos esses dados para treinar modelos de IA sem seu consentimento explícito. O processamento é realizado de forma segura e os dados são retidos apenas pelo tempo necessário para a execução do serviço.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">4. Compartilhamento de Dados</h2>
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">5. Cookies</h2>
                        <p>
                            O nosso site usa cookies para melhorar a experiência do usuário. Ao utilizar nosso site, você concorda com o uso de cookies de acordo com nossa política.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">6. Links para Sites Externos</h2>
                        <p>
                            O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">7. Compromisso do Usuário</h2>
                        <p className="mb-4">
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Rogério Júnior oferece no site e com caráter enunciativo, mas não limitativo:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                            <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Rogério Júnior, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">8. Mais Informações</h2>
                        <p>
                            Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">9. Direitos do Usuário e Exclusão de Dados</h2>
                        <p className="mb-4">
                            Em conformidade com a LGPD e outras leis de proteção de dados, você tem o direito de solicitar o acesso, a correção ou a exclusão de seus dados pessoais que mantemos em nossos sistemas.
                        </p>
                        <p>
                            <strong>Instruções para Exclusão de Dados:</strong> Se você deseja solicitar a remoção de seus dados pessoais associados ao nosso aplicativo ou site, envie um e-mail para <a href="mailto:contato@rogeriojunior.com.br" className="text-accent hover:underline">contato@rogeriojunior.com.br</a> com o assunto "Solicitação de Exclusão de Dados". Processaremos sua solicitação e confirmaremos a exclusão dentro do prazo legal estabelecido.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">10. Contato</h2>
                        <p>
                            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre as práticas de dados deste site, entre em contato conosco:
                        </p>
                        <ul className="list-none space-y-2 mt-4">
                            <li><strong>Rogério Júnior</strong></li>
                            <li>CNPJ: 57.419.052/0001-14</li>
                            <li>E-mail: <a href="mailto:contato@rogeriojunior.com.br" className="text-accent hover:underline">contato@rogeriojunior.com.br</a></li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-800">
                    <p className="text-sm text-gray-500 font-sans">
                        Esta política é efetiva a partir de <strong>Novembro/2025</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
