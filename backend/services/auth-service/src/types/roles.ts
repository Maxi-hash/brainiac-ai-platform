export enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager',
  TRAINER = 'trainer',
  USER = 'user'
}

export interface Permission {
  action: string;
  resource: string;
}

export interface RoleDefinition {
  name: Role;
  permissions: Permission[];
  inherits?: Role[];
}

export const roleDefinitions: RoleDefinition[] = [
  {
    name: Role.ADMIN,
    permissions: [
      { action: 'manage', resource: 'all' },
      { action: 'configure', resource: 'system' },
      { action: 'manage', resource: 'users' }
    ]
  },
  {
    name: Role.MANAGER,
    permissions: [
      { action: 'manage', resource: 'team' },
      { action: 'view', resource: 'analytics' },
      { action: 'manage', resource: 'resources' }
    ]
  },
  {
    name: Role.TRAINER,
    permissions: [
      { action: 'manage', resource: 'training' },
      { action: 'create', resource: 'content' },
      { action: 'view', resource: 'trainee-progress' }
    ]
  }
];