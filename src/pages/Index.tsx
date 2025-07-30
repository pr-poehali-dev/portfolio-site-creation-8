import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

const Index = () => {
  const currentTime = new Date().toLocaleTimeString('ru-RU', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  })
  
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const skills = [
    { name: 'C/C++', level: 95, color: 'bg-blue-500' },
    { name: 'Python', level: 88, color: 'bg-green-500' },
    { name: 'Rust', level: 82, color: 'bg-orange-500' },
    { name: 'Go', level: 75, color: 'bg-cyan-500' },
    { name: 'PostgreSQL', level: 90, color: 'bg-purple-500' },
    { name: 'Docker', level: 85, color: 'bg-blue-400' }
  ]

  const projects = [
    {
      title: 'IoT Data Pipeline',
      description: 'Высокопроизводительная система обработки данных с IoT устройств',
      tech: ['Rust', 'MQTT', 'TimescaleDB'],
      status: 'Завершён'
    },
    {
      title: 'Embedded Control System',
      description: 'Система управления промышленным оборудованием на микроконтроллерах',
      tech: ['C', 'FreeRTOS', 'CAN Bus'],
      status: 'В разработке'
    },
    {
      title: 'Blockchain API Service',
      description: 'RESTful API для взаимодействия с блокчейн сетями',
      tech: ['Go', 'gRPC', 'Redis'],
      status: 'Завершён'
    }
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          
          {/* Время */}
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">time.ts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-mono font-bold mb-1">{currentTime}</div>
              <div className="text-sm text-muted-foreground">UTC+3</div>
            </CardContent>
          </Card>

          {/* Дата */}
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">date.ts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">{currentDate}</div>
            </CardContent>
          </Card>

          {/* Статус */}
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">status.json</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-lg font-semibold">Активен</span>
              </div>
              <div className="text-sm text-muted-foreground mt-1">Доступен для проектов</div>
            </CardContent>
          </Card>

          {/* Обо мне */}
          <Card className="md:col-span-2 lg:col-span-1 xl:col-span-2 hover:scale-[1.02] transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">about.ts</CardDescription>
            </CardHeader>
            <CardContent className="flex items-start gap-4">
              <img 
                src="/img/a7c2acbe-8d73-4015-80e2-003292047749.jpg" 
                alt="Avatar" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Backend & Embedded Developer</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  Специализируюсь на разработке высокопроизводительных систем, 
                  встроенного ПО и backend-решений. Опыт работы с IoT, системами реального времени.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Icon name="Cpu" size={12} className="mr-1" />
                    Embedded
                  </Badge>
                  <Badge variant="secondary">
                    <Icon name="Server" size={12} className="mr-1" />
                    Backend
                  </Badge>
                  <Badge variant="secondary">
                    <Icon name="Database" size={12} className="mr-1" />
                    DevOps
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Навыки */}
          <Card className="lg:col-span-2 hover:scale-[1.02] transition-transform duration-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="Code2" size={20} />
                Языки программирования
              </CardTitle>
              <CardDescription className="text-xs">skills.md</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Icon name="Eye" size={14} className="mr-2" />
                Просмотреть все навыки
              </Button>
            </CardContent>
          </Card>

          {/* Проекты */}
          <Card className="xl:col-span-2 hover:scale-[1.02] transition-transform duration-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="Folder" size={20} />
                Проекты
              </CardTitle>
              <CardDescription className="text-xs">projects.json</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-2 border-muted pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-sm">{project.title}</h3>
                      <Badge 
                        variant={project.status === 'Завершён' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Icon name="ExternalLink" size={14} className="mr-2" />
                Просмотреть все проекты
              </Button>
            </CardContent>
          </Card>

          {/* Контакты */}
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">contact.json</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Icon name="Github" size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Icon name="Linkedin" size={16} className="mr-2" />
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Email
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Система */}
          <Card className="hover:scale-105 transition-transform duration-200">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs text-muted-foreground">system.info</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CPU</span>
                  <span className="text-xs text-muted-foreground">45%</span>
                </div>
                <Progress value={45} className="h-1" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">RAM</span>
                  <span className="text-xs text-muted-foreground">62%</span>
                </div>
                <Progress value={62} className="h-1" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Disk</span>
                  <span className="text-xs text-muted-foreground">23%</span>
                </div>
                <Progress value={23} className="h-1" />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default Index