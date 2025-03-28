import { Column, Entity, Index } from "typeorm";

@Index("wewenang_pkey", ["kdWewenang"], { unique: true })
@Entity("wewenang", { schema: "public" })
export class Wewenang {
  @Column("character", { primary: true, name: "kd_wewenang", length: 2 })
  kdWewenang!: string;

  @Column("character varying", { name: "nm_wewenang", length: 30 })
  nmWewenang!: string;
}
