import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-[#004E89]">
              ТИПОГРАФИЯ ТРИУМФ
            </h1>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('prices')}
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Цены
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
            >
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/818d0ead-fd60-44f9-80e4-f561784b7bad.jpg"
            alt="Printing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-bold text-[#004E89] mb-6 leading-tight">
              Профессиональная полиграфия
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Воплощаем идеи в яркие образы. Современное оборудование, 
              высокое качество печати и быстрые сроки выполнения заказов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg px-8"
              >
                Наши услуги
              </Button>
              <Button 
                onClick={() => scrollToSection('prices')}
                size="lg"
                variant="outline"
                className="border-2 border-[#004E89] text-[#004E89] hover:bg-[#004E89] hover:text-white text-lg px-8"
              >
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#004E89] mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Полный спектр полиграфических услуг для бизнеса и частных клиентов
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Визитки</CardTitle>
                <CardDescription className="text-base">
                  Печать визитных карточек на различных материалах с ламинацией
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Листовки и флаеры</CardTitle>
                <CardDescription className="text-base">
                  Яркие рекламные материалы любого формата и тиража
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Буклеты и брошюры</CardTitle>
                <CardDescription className="text-base">
                  Многостраничные издания с различными видами переплета
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Баннеры</CardTitle>
                <CardDescription className="text-base">
                  Широкоформатная печать для наружной и внутренней рекламы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Календари</CardTitle>
                <CardDescription className="text-base">
                  Настенные и настольные календари с индивидуальным дизайном
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-[#004E89]">Упаковка</CardTitle>
                <CardDescription className="text-base">
                  Печать на упаковочных материалах и изготовление коробок
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#004E89] mb-4">
            Цены
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Прозрачные тарифы на популярные услуги
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-[#004E89] mb-2">Визитки</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 500₽</div>
                <CardDescription className="text-base">за 100 штук</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Полноцветная печать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Мелованная бумага 300г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Ламинация матовая/глянцевая</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Срок изготовления 1-2 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow border-[#FF6B35] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярно
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-[#004E89] mb-2">Листовки А5</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 2000₽</div>
                <CardDescription className="text-base">за 500 штук</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Полноцветная печать 4+4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Мелованная бумага 130г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Любой формат до А3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Срок изготовления 2-3 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-[#004E89] mb-2">Баннеры</CardTitle>
                <div className="text-4xl font-bold text-[#FF6B35] mb-2">от 350₽</div>
                <CardDescription className="text-base">за 1 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Широкоформатная печать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Баннерная ткань 440г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Люверсы и усиление краев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-[#FF6B35] mt-0.5 flex-shrink-0" />
                    <span>Срок изготовления 1-3 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">
              Нужен индивидуальный расчет? Свяжитесь с нами для консультации
            </p>
            <Button 
              onClick={() => scrollToSection('contacts')}
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
            >
              Получить расчет
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#004E89] mb-4">
            Контакты
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#004E89]">Свяжитесь с нами</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="border-2" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="border-2" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="border-2" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} className="border-2" />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#004E89] mb-1">Телефон</h3>
                  <p className="text-gray-700 text-lg">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#004E89] mb-1">Email</h3>
                  <p className="text-gray-700 text-lg">info@triumf-print.ru</p>
                  <p className="text-gray-600">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#004E89] mb-1">Адрес</h3>
                  <p className="text-gray-700 text-lg">г. Москва, ул. Печатников, д. 15</p>
                  <p className="text-gray-600">м. Полиграфическая</p>
                </div>
              </div>

              <div className="pt-6">
                <img
                  src="/img/737a8f92-66d6-4dc3-9f63-b88ffb9e2359.jpg"
                  alt="Printing samples"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#004E89] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ТИПОГРАФИЯ ТРИУМФ</h3>
              <p className="text-gray-300">
                Профессиональная полиграфия для вашего бизнеса с 2005 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Визитки</li>
                <li>Листовки и флаеры</li>
                <li>Буклеты и брошюры</li>
                <li>Баннеры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@triumf-print.ru</li>
                <li>г. Москва, ул. Печатников, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-gray-300">
            <p>© 2024 Типография Триумф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
