import { Column, Entity, Index } from "typeorm";

@Index("lookup_group_pkey", ["kdLookupGroup"], { unique: true })
@Entity("lookup_group", { schema: "public" })
export class LookupGroup {
  @Column("character", { primary: true, name: "kd_lookup_group", length: 2 })
  kdLookupGroup!: string;

  @Column("character varying", { name: "nm_lookup_group", length: 50 })
  nmLookupGroup!: string;
}
