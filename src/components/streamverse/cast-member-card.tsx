import type { CastMember } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface CastMemberCardProps {
  member: CastMember;
}
//
export function CastMemberCard({ member }: CastMemberCardProps) {
  return (
    <Card className="bg-card border-transparent hover:shadow-md transition-shadow">
      <CardContent className="p-3 text-center">
        <div className="relative w-24 h-36 mx-auto mb-2 rounded-md overflow-hidden shadow-sm">
          <Image
            src={member.imageUrl}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint="actor portrait"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h4 className="text-sm font-medium text-card-foreground truncate">{member.name}</h4>
        <p className="text-xs text-muted-foreground truncate">{member.role}</p>
      </CardContent>
    </Card>
  );
}
