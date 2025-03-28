import { Column, Entity, Index } from "typeorm";

@Index("njoptkp_pkey", ["kdDati2", "kdPropinsi", "thnAwal"], { unique: true })
@Entity("njoptkp", { schema: "public" })
export class Njoptkp {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_awal", length: 4 })
  thnAwal!: string;

  @Column("character", { name: "thn_akhir", length: 4 })
  thnAkhir!: string;

  @Column("integer", { name: "nilai_njoptkp" })
  nilaiNjoptkp!: number;
}
