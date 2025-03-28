import { Column, Entity, Index } from "typeorm";

@Index("jns_kendaraan_pkey", ["kdKendaraan"], { unique: true })
@Entity("jns_kendaraan", { schema: "public" })
export class JnsKendaraan {
  @Column("character", { primary: true, name: "kd_kendaraan", length: 2 })
  kdKendaraan!: string;

  @Column("character varying", {
    name: "ket_kendaraan",
    nullable: true,
    length: 30,
  })
  ketKendaraan!: string | null;
}
