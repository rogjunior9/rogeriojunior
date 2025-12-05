import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
    return (
        <div className="bg-black text-white min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center text-gray-300 hover:text-accent transition-colors mb-8 font-display uppercase tracking-wider font-bold">
                    <ArrowLeft className="mr-2" size={20} />
                    Voltar para Home
                </Link>

                <h1 className="text-4xl font-display font-bold uppercase tracking-tight mb-8 text-white">
                    Termos e Condições
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed font-sans font-light">
                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">1. Termos</h2>
                        <p>
                            Ao acessar ao site Rogério Júnior, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">2. Uso de Licença</h2>
                        <p className="mb-4">
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Rogério Júnior , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>modificar ou copiar os materiais;</li>
                            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Rogério Júnior;</li>
                            <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                            <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                        </ul>
                        <p className="mt-4">
                            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Rogério Júnior a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">3. Isenção de responsabilidade</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Os materiais no site da Rogério Júnior são fornecidos 'como estão'. Rogério Júnior não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                            <li>Além disso, o Rogério Júnior não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">4. Limitações</h2>
                        <p>
                            Em nenhum caso o Rogério Júnior ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Rogério Júnior, mesmo que Rogério Júnior ou um representante autorizado da Rogério Júnior tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">5. Precisão dos materiais</h2>
                        <p>
                            Os materiais exibidos no site da Rogério Júnior podem incluir erros técnicos, tipográficos ou fotográficos. Rogério Júnior não garante que qualquer material em seu site seja preciso, completo ou atual. Rogério Júnior pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Rogério Júnior não se compromete a atualizar os materiais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">6. Links</h2>
                        <p>
                            O Rogério Júnior não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Rogério Júnior do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">Modificações</h2>
                        <p>
                            O Rogério Júnior pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold uppercase text-white mb-4">Lei aplicável</h2>
                        <p>
                            Estes termos e condições são regidos e interpretados de acordo com as leis do Rogério Júnior e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-800">
                    <p className="text-sm text-gray-500 font-sans">
                        Última atualização: <strong>Novembro/2025</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
