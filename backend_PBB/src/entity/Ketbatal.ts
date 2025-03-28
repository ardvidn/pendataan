import { Column, Entity, Index, OneToMany } from "typeorm";
import { PembatalanSppt } from "./PembatalanSppt";

@Index("ketbatal_pkey", ["kdBatal"], { unique: true })
@Entity("ketbatal", { schema: "public" })
export class Ketbatal {
  @Column("character", { primary: true, name: "kd_batal", length: 2 })
  kdBatal!: string;

  @Column("character varying", {
    name: "ket_batal",
    nullable: true,
    length: 30,
  })
  ketBatal!: string | null;

  @OneToMany(() => PembatalanSppt, (pembatalanSppt) => pembatalanSppt.kdBatal)
  pembatalanSppts!: PembatalanSppt[];
}
