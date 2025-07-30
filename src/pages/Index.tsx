import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({ temp: 27, condition: 'Ясно' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Rust', level: 90, color: 'bg-orange-500' },
    { name: 'C/C++', level: 85, color: 'bg-blue-500' },
    { name: 'Go', level: 80, color: 'bg-cyan-500' },
    { name: 'Python', level: 75, color: 'bg-yellow-500' },
    { name: 'Embedded C', level: 88, color: 'bg-green-500' },
    { name: 'Linux', level: 82, color: 'bg-purple-500' },
  ];

  const projects = [
    {
      title: 'IoT Monitoring System',
      description: 'Система мониторинга IoT устройств с использованием Rust и embedded системы',
      status: 'Завершён',
      tech: ['Rust', 'Embedded C', 'MQTT'],
      type: 'Embedded'
    },
    {
      title: 'High-Performance API',
      description: 'Высокопроизводительный REST API для обработки больших данных',
      status: 'В разработке',
      tech: ['Go', 'PostgreSQL', 'Redis'],
      type: 'Backend'
    },
    {
      title: 'Real-time Data Processor',
      description: 'Обработчик данных в реальном времени для финансовых операций',
      status: 'Завершён',
      tech: ['Rust', 'Apache Kafka', 'TimescaleDB'],
      type: 'Backend'
    }
  ];

  const commitData = Array.from({ length: 365 }, (_, i) => {
    const intensity = Math.floor(Math.random() * 5);
    return { day: i, intensity };
  });

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
          
          {/* Время */}
          <Card className="hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-green-400">time.ts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-mono font-bold mb-1">
                {formatTime(currentTime)}
              </div>
              <div className="text-xs text-muted-foreground">UTC+3</div>
            </CardContent>
          </Card>

          {/* Дата */}
          <Card className="hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-green-400">date.ts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-semibold mb-1">
                {formatDate(currentTime)}
              </div>
            </CardContent>
          </Card>

          {/* Погода */}
          <Card className="hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-green-400">weather.json</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-semibold">{weather.condition}</div>
                  <div className="text-2xl font-bold">{weather.temp}°C</div>
                </div>
                <Icon name="Sun" size={32} className="text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          {/* Обо мне */}
          <Card className="lg:col-span-2 hover:scale-[1.02] transition-all duration-200 border-border/50 relative overflow-hidden">
            <CardHeader className="pb-3">
              <CardDescription className="text-xs text-green-400">about.ts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
                  👨‍💻
                </div>
                <div className="flex-1">
                  <h1 className="text-xl font-bold mb-2">
                    Привет! Я <span className="text-green-400">Backend Developer</span>
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="text-xs border-green-400/30 text-green-400">
                      <Icon name="Server" size={12} className="mr-1" />
                      Backend
                    </Badge>
                    <Badge variant="outline" className="text-xs border-blue-400/30 text-blue-400">
                      <Icon name="Cpu" size={12} className="mr-1" />
                      Embedded
                    </Badge>
                    <Badge variant="outline" className="text-xs border-orange-400/30 text-orange-400">
                      <Icon name="Code2" size={12} className="mr-1" />
                      Systems Programming
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Специализируюсь на разработке высокопроизводительных backend систем и embedded решений. 
                    Работаю с Rust, Go, C/C++ и создаю IoT системы.
                  </p>
                  <p className="text-xs text-green-400">
                    Нужен разработчик? — Свяжитесь со мной!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Навыки */}
          <Card className="xl:col-span-2 hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="Code2" size={20} />
                Языки программирования
              </CardTitle>
              <CardDescription className="text-xs text-green-400">skills.md</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${skill.color}`} />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-green-400">Активен</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 border-green-400/30 text-green-400 hover:bg-green-400/10">
                <Icon name="Eye" size={14} className="mr-2" />
                Просмотреть все навыки
              </Button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Языки, фреймворки, утилиты, с которыми я работаю, и прочие классные штуки!
              </p>
            </CardContent>
          </Card>

          {/* Проекты */}
          <Card className="xl:col-span-2 hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="FolderOpen" size={20} />
                Просмотреть все проекты
              </CardTitle>
              <CardDescription className="text-xs text-green-400">projects.json</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Завершённые, в разработке, заморожённые проекты. Здесь все мои проекты, 
                включая личные и сайты на заказ
              </p>
              <div className="space-y-3">
                {projects.slice(0, 2).map((project, index) => (
                  <div key={index} className="border-l-2 border-green-400/30 pl-4 pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm">{project.title}</h3>
                      <Badge 
                        variant={project.status === 'Завершён' ? 'default' : 'secondary'}
                        className={`text-xs ${project.status === 'Завершён' ? 'bg-green-400/20 text-green-400 border-green-400/30' : ''}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Музыка */}
          <Card className="lg:col-span-2 hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-green-400">yandex-music.json</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Music" size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl font-bold">42</span>
                    <span className="text-sm text-muted-foreground">Зорка, 6055 • 2025</span>
                  </div>
                  <Progress value={42} className="h-1 mb-1" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>01:42</span>
                    <span>01:42</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Потужнометр */}
          <Card className="hover:scale-[1.02] transition-all duration-200 border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">ПОТУЖНОМЕТР</CardTitle>
              <CardDescription className="text-xs text-green-400">potuzhno.beta v0.1.0</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">😱</div>
                <div className="text-4xl">💀</div>
              </div>
              
              {/* Грид коммитов */}
              <div className="grid grid-cols-12 gap-1 mb-4">
                {commitData.slice(0, 84).map((commit, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-sm ${
                      commit.intensity === 0 ? 'bg-muted' :
                      commit.intensity === 1 ? 'bg-green-900' :
                      commit.intensity === 2 ? 'bg-green-700' :
                      commit.intensity === 3 ? 'bg-green-500' :
                      'bg-green-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">48</div>
                <div className="text-xs text-muted-foreground">ПТЖ</div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Index;