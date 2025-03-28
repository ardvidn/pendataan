import { Column, Entity, Index } from "typeorm";

@Index("group_resource_pkey", ["kdGroupResource"], { unique: true })
@Entity("group_resource", { schema: "public" })
export class GroupResource {
  @Column("character", { primary: true, name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character varying", { name: "nm_group_resource", length: 45 })
  nmGroupResource!: string;
}
