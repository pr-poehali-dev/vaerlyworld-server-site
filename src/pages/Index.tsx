import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(247);
  const [serverStatus, setServerStatus] = useState('online');

  useEffect(() => {
    // Simulate real-time player count updates
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: 'Gamepad2',
      title: 'Выживание',
      description: 'Классический режим выживания с уникальными механиками'
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Дружелюбные игроки и активная администрация'
    },
    {
      icon: 'Crown',
      title: 'Экономика',
      description: 'Развитая игровая экономика и торговля'
    },
    {
      icon: 'Shield',
      title: 'Защита',
      description: 'Надёжная защита от гриферов и читеров'
    }
  ];

  const serverStats = [
    { label: 'Онлайн игроков', value: onlinePlayers, icon: 'Users' },
    { label: 'Максимум игроков', value: 500, icon: 'Trophy' },
    { label: 'Время работы', value: '99.9%', icon: 'Clock' },
    { label: 'Версия', value: '1.20.4', icon: 'Code' }
  ];

  const navigation = [
    { name: 'Главная', href: '#', active: true },
    { name: 'Правила', href: '#rules' },
    { name: 'Донат', href: '#donate' },
    { name: 'Новости', href: '#news' },
    { name: 'Форум', href: '#forum' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-green via-minecraft-blue to-minecraft-purple">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-minecraft-green to-minecraft-blue rounded-lg flex items-center justify-center">
                <Icon name="Blocks" size={20} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">VaerlyWorld</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <Badge variant={serverStatus === 'online' ? 'default' : 'destructive'} className="bg-minecraft-green text-white">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                {serverStatus === 'online' ? 'Онлайн' : 'Офлайн'}
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/202640a5-edff-419f-a9bf-71f4699bd098.jpg" 
            alt="Minecraft landscape"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-minecraft-green/50 to-minecraft-blue/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              VaerlyWorld
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Добро пожаловать в уникальный мир приключений! Присоединяйся к нашему серверу и открой для себя бесконечные возможности в мире Minecraft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/90 text-white font-semibold px-8 py-3 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-minecraft-blue font-semibold px-8 py-3 text-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать лаунчер
              </Button>
            </div>

            {/* Server IP */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 inline-block">
              <p className="text-white/80 text-sm mb-2">IP адрес сервера:</p>
              <div className="flex items-center space-x-2">
                <code className="text-white font-mono text-lg font-semibold">play.vaerlyworld.ru</code>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <Icon name="Copy" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <Icon name={stat.icon} size={32} className="text-white mb-3 mx-auto" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Особенности сервера
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Откройте для себя уникальные возможности и механики, которые делают наш сервер особенным
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-minecraft-green to-minecraft-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-white font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              Последние новости
            </h2>
            <p className="text-xl text-white/80">
              Будьте в курсе всех обновлений и событий на сервере
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="text-white/60 text-sm mb-2">26 июля 2025</div>
                  <CardTitle className="text-white font-heading">Обновление 1.20.4</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 mb-4">
                    Новые возможности, исправления багов и улучшения игрового процесса. Присоединяйтесь и исследуйте обновления!
                  </CardDescription>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-minecraft-blue">
                    Читать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-lg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-minecraft-green to-minecraft-blue rounded-lg flex items-center justify-center">
                  <Icon name="Blocks" size={20} className="text-white" />
                </div>
                <span className="font-heading font-bold text-xl text-white">VaerlyWorld</span>
              </div>
              <p className="text-white/80">
                Лучший Minecraft сервер с уникальным геймплеем и дружелюбным сообществом.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Навигация</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-white/80 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-white mb-4">Связь</h3>
              <div className="space-y-2">
                <p className="text-white/80">Discord: VaerlyWorld</p>
                <p className="text-white/80">VK: vk.com/vaerlyworld</p>
                <p className="text-white/80">Email: admin@vaerlyworld.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © 2025 VaerlyWorld. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;