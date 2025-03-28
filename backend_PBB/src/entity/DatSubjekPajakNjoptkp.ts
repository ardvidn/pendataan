import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { DatObjekPajak } from "./DatObjekPajak";

@Index("d33_d7_fk", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut"], {})
@Index("d33_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "subjekPajakId"], { unique: true })
@Index("dat_subjek_pajak_njoptkp_pkey", ["subjekPajakId"], { unique: true })
@Entity("dat_subjek_pajak_njoptkp", { schema: "public" })
export class DatSubjekPajakNjoptkp {
  @Column("character", { primary: true, name: "subjek_pajak_id", length: 30 })
  subjekPajakId!: string;

  @Column("character", { name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("character", {
    name: "thn_njoptkp",
    length: 4,
    default: () => "to_char(statement_timestamp(), 'YYYY')",
  })
  thnNjoptkp!: string;

  @ManyToOne(() => DatObjekPajak, (datObjekPajak) => datObjekPajak.datSubjekPajakNjoptkps)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
  ])
  datObjekPajak!: DatObjekPajak;
}
